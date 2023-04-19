const seeder = require('mongoose-seed')

// env
const dotenv = require('dotenv')

dotenv.config()

const db = process.env.MONGODB_URI

// Connect to MongoDB via Mongoose
seeder.connect(db, function () {
    // Load Mongoose models
    seeder.loadModels([
        '../../src/models/roles.model',
        '../../src/models/users.model',
        '../../src/models/permissions.model',
    ])

    // Clear specified collections
    seeder.clearModels(['roles', 'users', 'permissions'], function () {
        // Callback to populate DB once collections have been cleared

        seeder.populateModels(data, function () {
            seeder.disconnect()
        })
    })
})

const data = [
  {
    model: 'roles',
    documents: [
      {
        name: 'ADMIN',
        permissions: ['admin/all'],
      },
      {
                name: 'EMPLOYEE',
                permissions: ['tenant/view', 'company/view', 'payroll/view'],
      },
    ],
    },
    {
        model: 'users',
    documents: [
      {
        password: '$2a$10$BzPuSayDuZwMeihQyaKWHOnobz.W2KIKQNVZX3nREv9XJAdT9VeK.',
        email: 'primaryadmin@bulkpay.ng',
        phoneNumber: '090345733773',
        firstName: 'Primary',
        lastName: 'Admin1',
        role: 'PLATFORM_ADMIN',
        companyId: '5effe245e1a8ef37279a659e',
        permissions: {
          __global__: [
            {
              resource: 'admin',
              actions: ['admin/all'],
            },
          ],
        },
        status: 'ACTIVE',
        tenantId: '0',
        isEmployee: false,
      },
    ],
    },
    {
        model: 'permissions',
    documents: [
      {
        resource: 'admin',
        actions: [
          {
            value: 'admin/all',
            alias: 'Admin',
          },
        ],
      },
      {
        resource: 'role',
        actions: [
          {
            value: 'role/manage',
                        alias: 'Manage Roles',
          },
          {
                        value: 'role/view',
                        alias: 'View Roles',
          },
        ],
      },
      {
        resource: 'tenant',
        actions: [
          {
            value: 'tenant/manage',
            alias: 'Manage Tenant',
          },
                    {
            value: 'tenant/view',
            alias: 'View Tenant',
          },
                ],
      },
      {
                resource: 'Company',
        actions: [
          {
            value: 'company/manage',
            alias: 'Manage Companies',
          },
          {
                        value: 'company/view',
                        alias: 'View Companies',
          },
                ],
            },
      {
        resource: 'Employee',
        actions: [
          {
                        value: 'employee/manage',
            alias: 'Manage Employees',
          },
          {
            value: 'employee/view',
            alias: 'View Employees',
                    },
        ],
      },
            {
                resource: 'Payrules',
                actions: [
          {
            value: 'payrule/manage',
            alias: 'Manage Payrules',
                    },
          {
            value: 'payrule/view',
            alias: 'View Payrules',
                    },
        ],
      },
    ],
    },
];
