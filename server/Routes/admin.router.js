const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose = require('mongoose')
const Catalog = require('../Models/catalog.model')
const {
  Admin
} = require('../Models/admin.model')

AdminJS.registerAdapter(AdminJSMongoose)

const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
  resources: [{
    resource: Catalog,
    options: {
      properties: {
        image: {
          components: {
            edit: AdminJS.bundle('./my-react-component'),
          },
        },
      },
    },
  }],
  locale: {
    translations: {
      labels: {
        Catalogs: 'Каталоги',
        Category: 'Категории',
        Product: 'Продукты'
      }
    }
  },
  branding: {
    companyName: 'Админ-панель GameStore'
  }
})

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  cookieName: 'adminjs112',
  cookiePassword: 'superl1121ongandcomplicatednam1212e',
  authenticate: async (email, password) => {
    const user = await Admin.findOne({
      email
    })

    if (user.email === email && user.password === password) {
      return user
    } else {
      return null
    }
  }
})
module.exports = router