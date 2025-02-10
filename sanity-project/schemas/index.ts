import {user, account} from 'next-auth-sanity/schemas'
import block from './blockContent'
import category from './category'
import product from './product'

export const schemaTypes = [category, block, product, user, account]


