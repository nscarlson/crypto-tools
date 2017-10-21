import { createAction } from 'redux-actions'

import { MODALS_ENQUEUE_ONE } from 'services/redux/types'

const modalsEnqueueOne = createAction(MODALS_ENQUEUE_ONE)

export default modalsEnqueueOne
