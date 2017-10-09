import { createAction } from 'redux-actions'

import { MODALS_DEQUEUE_ONE } from 'services/redux/types'

const modalsDequeueOne = createAction(MODALS_DEQUEUE_ONE)

export default modalsDequeueOne
