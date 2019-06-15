import { Router } from 'express'

import flowers from './flowers'

const router = Router()

router.use(flowers)

export default router
