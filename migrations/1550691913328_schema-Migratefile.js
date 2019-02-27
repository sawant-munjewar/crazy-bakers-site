exports.up = pgm => {

pgm.createSchema("CrazyBakerSchema");

pgm.createTable("CrazyBakerSchema.Table_Inventory", {
     id: { type: 'serial', notNull: true, primaryKey: true },
     name: { type: "varchar(1000)", notNull: true },
     price: { type: "decimal", notNull: true },
     type: { type: "varchar(500)", notNull: true },
     weight: { type: "decimal", notNull: false },
     Quantity: { type: "smallint", notNull: false },
     Description: { type: "text", notNull: false },
     AddedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });


  pgm.createTable("CrazyBakerSchema.Table_Menu", {
       id: { type: 'serial', notNull: true, primaryKey: true },
       name: { type: "varchar(1000)", notNull: true },
       price: { type: "decimal", notNull: true },
       category: { type: "varchar(500)", notNull: true },
       subcategory: { type: "varchar(500)", notNull: true },
       weight: { type: "decimal", notNull: false },
       Quantity: { type: "smallint", notNull: false },
       Description: { type: "text", notNull: false },
       IsAvailable: { type: "boolean", notNull: true },
       AddedAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp")
      }
    });


}
