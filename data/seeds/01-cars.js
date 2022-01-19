// STRETCH
const cars = [ 
    {
        vin: '12345678910121',
        make: 'porsche',
        model: 'GT3RS',
        mileage: '1200',
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '12345678910122',
        make: 'porsche',
        model: 'GT2RS',
        mileage: '878',
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '12345678910123',
        make: 'porsche',
        model: 'GT3',
        mileage: '120',
        title: 'clean',
        transmission: 'manual',
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
    }
