export default {
  name: 'resturent',
  title: 'Resturent',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturent name',
      type: 'string',
      validation: (Rule) =>Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) =>Rule.max(200)
    },
    {
      name: 'image',
      title: 'Image of the Resturent',
      type: 'image',

    },
    {
      name: 'long',
      title: 'Longitude of the Resturent',
      type: 'number',

    },
    {
      name: 'address',
      title: 'Resturent Address',
      type: 'string',
      validation: (Rule) =>Rule.required()

    },
    {
      name: 'rating',
      title: 'Enter a rating from (1-5) Stars',
      type: 'number',
      validation: (Rule) =>Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value between 1 and 5")

    },
    {
      name: "type",
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type:'category'}],

    },
    {
      name: "dish",
      type: 'array',
      title: 'Dishes',
      of : [{type : "reference" , to: [{type: "dish" }] }],

    },
  ],

 
}
