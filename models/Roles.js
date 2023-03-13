const mongoose = require("mongoose");

// TO DO 
// CONNECT ROLES AND PERMISSION SCHEMAS TO DB
// ALLOW ALL USERS ACCESS TO RESOURCES BASED ON PERMISSIONS ASSIGNED TO EACH ROLE.
const RoleSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true,
          unique: true,
        },
        description: {
          type: String,
        },
        permissions: [
          {
            type: mongoose.Schema.ObjectId,
            ref: 'Permission',
          },
        ],
});


module.exports = mongoose.model("Role", RoleSchema);

