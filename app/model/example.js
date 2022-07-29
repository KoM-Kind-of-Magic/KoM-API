const database = require('./database/database')

const ExampleSchema = new database.Schema({
    high_24h: {
        type: Number,
        required: true,
      },
      low_24h: {
        type: Number,
        required: true,
      },
});

module.exports = database.model("Example", ExampleSchema);
