import { createAction } from 'redux-actions'

import { MODALS_DEQUEUE_ALL } from 'services/redux/types'

const modalsDequeueAll = createAction(MODALS_DEQUEUE_ALL)

export default modalsDequeueAll
