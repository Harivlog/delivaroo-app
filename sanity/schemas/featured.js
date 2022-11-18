export default {
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Featured Category name',
        validation: (Rule) =>Rule.required()
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        validation: (Rule) =>Rule.max(200)
      },
      {
        name: 'resturents',
        type: 'array',
        title: 'Resturents',
        of: [{type : 'reference', to: [{type : "resturent"}]}]
      },
      {
        name: 'image',
        title: 'Image of the Dish',
        type: 'image',
  
      },
    ],
   
  }
  