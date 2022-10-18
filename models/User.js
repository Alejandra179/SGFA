const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin","comun"],
      default:"comun"
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isActive: Boolean
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
