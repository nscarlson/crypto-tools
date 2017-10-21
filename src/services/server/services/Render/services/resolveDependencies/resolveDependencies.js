
import walkTree from 'react-tree-walker'

const getDependencies = async (rootElement, rootContext, fetchRoot) => {
  const promises = []

  const visitor = (element, instance, context) => {
    // determine if we should skip the root element
    const skipRoot = !fetchRoot && (element === rootElement)

    // if the current element has a getDependencies method, see if there are any promises and add them
    if (instance && typeof instance.getDependencies === 'function' && !skipRoot) {
      const promise = instance.getDependencies()

      if (promise instanceof Promise) {
        promises.push({ context, element, promise })

        // don't recurse
        return false
      }
    }

    return true
  }

  // walk the tree, looking for dependencies
  await walkTree(rootElement, visitor, rootContext)

  return promises
}

const resolveDependencies = async (rootElement, rootContext = {}, fetchRoot = true) => {
  // get dependencies for current tree
  const promises = await getDependencies(rootElement, rootContext, fetchRoot)

  if (promises.length) {
    const errors = []

    const mappedPromises = promises.map(({ context, element, promise }) => promise
      .then(() => resolveDependencies(element, context, false))
      .catch((err) => errors.push(err)))

    // attempt to resolve all promises
    await Promise.all(mappedPromises)

    // deal with errors if there are any
    if (errors.length) {
      const error = new Error(`${errors.length} errors were thrown while resolving dependencies.`)
      error.errors = errors

      throw error
    }
  }
}

const finalResolveDependencies = (rootElement) => Promise.all([
  resolveDependencies(rootElement),
])

export default finalResolveDependencies
