import { Router } from 'express'

import flowers from './flowers'
import colors from './colors'
import catalog from './catalog'
import bouquet from './bouquet'

const router = Router()

router.use(flowers)
router.use(colors)
router.use(catalog)
router.use(bouquet)

export default router
