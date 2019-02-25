exports.up = pgm => {

pgm.createSchema("CrazyBakerSchema");

pgm.createTable("CrazyBakerSchema.Table_Inventory", {
    Inv_id: { type: 'serial', notNull: true, primaryKey: true },
    Inv_name: { type: "varchar(1000)", notNull: true },
    Inv_price: { type: "decimal", notNull: true },
    Inv_type: { type: "varchar(500)", notNull: true },
    Inv_weight: { type: "decimal", notNull: false },
    Inv_Quantity: { type: "smallint", notNull: false },
    Inv_Description: { type: "text", notNull: false },
    Inv_AddedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });


  pgm.createTable("CrazyBakerSchema.Table_Menu", {
      Menu_id: { type: 'serial', notNull: true, primaryKey: true },
      Menu_name: { type: "varchar(1000)", notNull: true },
      Menu_price: { type: "decimal", notNull: true },
      Menu_category: { type: "varchar(500)", notNull: true },
      Menu_subcategory: { type: "varchar(500)", notNull: true },
      Menu_weight: { type: "decimal", notNull: false },
      Menu_Quantity: { type: "smallint", notNull: false },
      Menu_Description: { type: "text", notNull: false },
      Menu_IsAvailable: { type: "boolean", notNull: true },
      Menu_AddedAt: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp")
      }
    });


}
