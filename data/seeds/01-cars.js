// STRETCH
const cars = [ 
    {
        vin: 'WP0BA2971FL015079',
        make: 'porsche',
        model: 'GT3RS',
        mileage: '1200',
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'WP0AD299082783293',
        make: 'porsche',
        model: 'GT2RS',
        mileage: '878',
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'WP0CA29935S755534',
        make: 'porsche',
        model: 'GT3',
        mileage: '120',
        title: 'clean',
        transmission: 'pdk',
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
