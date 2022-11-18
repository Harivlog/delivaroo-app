export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule) =>Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) =>Rule.max(200)
    },
    {
      name: 'price',
      title: 'Price of the dish in GBP',
      type: 'number',

    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',

    },
  ],
 
}
