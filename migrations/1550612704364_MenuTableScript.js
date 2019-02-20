exports.up = pgm => {
  pgm.createTable('MenuTable', {
   Menu_id: {
     type: 'int',
     primaryKey: true,
     notNull: true,
   },
   Menu_name: {
     type: 'string',
     length: 40,
     notNull: true,
   },
   Menu_Category: {
     type: 'string',
     length: 40,
     notNull: true,
   },
   Menu_SubCategory: {
     type: 'string',
     length: 40,
     notNull: true,
   },
   Menu_Price: {
     type: 'integer',
     notNull: true,
   },
   Menu_IsAvailable: {
     type: 'char',
     notNull: true,
   },
   Menu_QuantityInKg: {
     type: 'integer',
     notNull: false,
   },
   Menu_QuantityInNumber: {
     type: 'integer',
     notNull: false,
   },
   Menu_Info: {
     type: 'string',
     length: 50,
     notNull: true,
   },
   Menu_InDate: {
     type: 'date',
     notNull: true,
   }
 });
};
