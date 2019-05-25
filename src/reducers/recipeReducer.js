const initialState = {
    recipes: [
        {
          source:
            'https://scontent-arn2-1.cdninstagram.com/vp/8b212569c1062d9d6955da8ee6af98ee/5D789A51/t51.2885-15/e35/s1080x1080/60250164_205235323783508_938903823599399491_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
          description: 'Vanilla parfait',
          id: 0
        },
        {
          source:
            'https://scontent-arn2-1.cdninstagram.com/vp/794d957d79f567c3c4398e48530ddda1/5D61CBC6/t51.2885-15/e35/35000488_1778026068912769_3119205185377796096_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
          description: 'Vanilla Pannacotta with Strawberrys',
          id: 1
        },
        {
          source:
            'https://scontent-arn2-1.cdninstagram.com/vp/96f3908264d58b31f2524ec5b19c0ec6/5D5CF535/t51.2885-15/e35/27579097_963359183815106_5284594741013381120_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
          description: 'Linguine with ceps and trompettes',
          id: 2
        },
        {
          source:
            'https://scontent-arn2-1.cdninstagram.com/vp/e6f3d1e4ef4feb529864020a79eab1a1/5D68BB40/t51.2885-15/e35/29415458_350139578813608_4916861406361419776_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
          description: 'Pasta alla Norcina',
          id: 3
        },
        {
          source:
            'https://scontent-arn2-1.cdninstagram.com/vp/93b2c8ba519e5dfd171d5d7fe50f6899/5D9AD6A3/t51.2885-15/e35/28158251_156921321683390_3728430400641433600_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
          description: 'Linguine in a truffle veloute with mushrooms',
          id: 4
        },
        {
          source:
          'https://scontent-arn2-1.cdninstagram.com/vp/ba98cd20c6edada48a29a782b7e8e569/5D836CDF/t51.2885-15/e35/52065964_299019550790795_327563707725342018_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
          description: 'Arrabiata with burrata & basil',
          id: 5
        }]
}

const recipeReducer = (state = initialState, action) => {
    return state;
};

export default recipeReducer;