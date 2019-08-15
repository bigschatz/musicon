/* eslint-disable no-undef */
const context = {
  title: 'Welcome to Musicon',

  body:
    'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',

  instruments: [
    {
      name: 'Electronic Keyboard',
      price: '$1,999.00',
      sale: '$1,699.89',
      image:
        'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png',
      description:
        'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
    },

    {
      name: 'Electric Guitar',
      price: '$899.99',
      sale: '$699.00',
      image:
        'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electric-guitar.png',
      description:
        "Join the legends of the '50s and '60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.",
    },

    {
      name: 'Bass Guitar',
      price: '$624.99',
      image:
        'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/bass-guitar.png',
      description:
        'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
    },

    {
      name: 'Drum Kit',
      price: '$649.00',
      sale: '$349.00',
      image:
        'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/drum-kit.png',
      description:
        'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
    },

    {
      name: 'Violin',
      price: '$245.00',
      image:
        'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/violin.png',
      description:
        'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
    },
  ],
}

const templateSource = document.getElementById('templateHB').innerHTML
const template = Handlebars.compile(templateSource)
const compiledHtml = template(context)
document.getElementById('information').innerHTML = compiledHtml
