// const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

// const dbConfig = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true'
//   }
// };

// const pool = new Pool(dbConfig);

// module.exports = pool;
// const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

// const dbConfig = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true'
//   }
// };

// const pool = new Pool(dbConfig);

// module.exports = pool;
// const { Pool } = require("pg");
// const dotenv = require("dotenv");
// const path = require("path");

// // Specify the path to your .env file
// const envPath = path.resolve(__dirname, '../.env');

// // Load the environment variables from the specified path
// dotenv.config({ path: envPath });

// const dbConfig = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true'
//   }
// };

// const pool = new Pool(dbConfig);

// module.exports = pool;

// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true, // Set to true if phone number is optional, otherwise set to false
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register };

// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true, // Set to false if phone number is required
//   },
// });

// const Login = sequelize.define('Login', {
//   loginId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register, Login };

// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   otp: { // Add the otp column
//     type: DataTypes.STRING, // Change the data type if necessary
//     allowNull: true,
//   },
// });


// const Login = sequelize.define('Login', {
//   loginId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register, Login };
// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending', // Add status to track verification status
//   },
// });

// const Login = sequelize.define('Login', {
//   loginId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register, Login };


// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending',
//   },
// });

// const Login = sequelize.define('Login', {
//   loginId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register, Login };


// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   otp: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'pending',
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   gender: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// const Bus = sequelize.define('Bus', {
//   busId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   busName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   busNumber: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   totalSeats: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// const Route = sequelize.define('Route', {
//   routeId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   source: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   destination: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   distance: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
// });

// const Trip = sequelize.define('Trip', {
//   tripId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   busId: {
//     type: DataTypes.UUID,
//     allowNull: false,
//     references: {
//       model: 'Buses',
//       key: 'busId'
//     }
//   },
//   routeId: {
//     type: DataTypes.UUID,
//     allowNull: false,
//     references: {
//       model: 'Routes',
//       key: 'routeId'
//     }
//   },
//   date: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
// });

// const Booking = sequelize.define('Booking', {
//   bookingId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userId: {
//     type: DataTypes.UUID,
//     allowNull: false,
//     references: {
//       model: 'Registers',
//       key: 'registerId'
//     }
//   },
//   tripId: {
//     type: DataTypes.UUID,
//     allowNull: false,
//     references: {
//       model: 'Trips',
//       key: 'tripId'
//     }
//   },
//   seatsBooked: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register, Bus, Route, Trip, Booking };

const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: process.env.DB_SSL === 'true',
      rejectUnauthorized: false
    }
  }
});

const Register = sequelize.define('Register', {
  registerId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Login = sequelize.define('Login', {
  loginId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Bus = sequelize.define('Bus', {
  busId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  busName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  busNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Route = sequelize.define('Route', {
  routeId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const Trip = sequelize.define('Trip', {
  tripId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  busId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Buses',
      key: 'busId'
    }
  },
  routeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Routes',
      key: 'routeId'
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const Booking = sequelize.define('Booking', {
  bookingId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Registers',
      key: 'registerId'
    }
  },
  tripId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Trips',
      key: 'tripId'
    }
  },
  seatsBooked: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err));

module.exports = { sequelize, Register, Login, Bus, Route, Trip, Booking };
