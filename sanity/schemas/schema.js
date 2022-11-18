// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


import category from './category'
import dish from './dish'
import resturent from './resturent'
import featured from './featured'

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([

    resturent,
    category, 
    dish,
    featured,
  ]),
})
