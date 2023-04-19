
// import 'package:opsmanagerapp/models/vitals.dart';
// import 'package:sqflite/sqflite.dart';
// import '../dbconfig.dart';

// class CustomerDAO{
//   Database _db;

//   CustomerDAO() {
//     _getDbInstance();
//   }

//   void _getDbInstance() async => _db = await DbConfig.getInstance();

//   Future<int> insert(VitalModel vital) async {
//     _db = await DbConfig.getInstance();
//     var id = await _db.insert(Vital.tableName, vital.toJson());
//     return id;
//   }

//   Future<List<Customer>> getVitals() async {
//     _db = await DbConfig.getInstance();
//     List<Customer> list = [];

//     List<Map> maps = await _db.query(
//         Vital.tableName,
//         columns: [Vital.columnId, Vital.columnRegion, Vital.columnBhub, Vital.columnMeterbook,
//          Vital.columnCustomerCategory]

  
//     );

//     if (maps.length > 0) list = Vital.fromJsonList(maps);

//     return list;
//   }

//   Future<Customer> getCustomer(int id) async {
//     _db = await DbConfig.getInstance();
//     List<Map> maps = await _db.query(Vital.tableName, 
//         columns: [Vital.columnId, Vital.columnRegion, Vital.columnBhub, Vital.columnMeterbook],
//         where: '${Vital.columnId} = ?',
//         whereArgs: [id]
//     );

//     if (maps.length > 0) {
//       return Vital.fromJson(maps.first);
//     }

//     return null;
//   }

//   Future<int> delete(int id) async {
//     _db = await DbConfig.getInstance();
//      int num = await _db.delete(
//       Vital.tableName,
//       where: '${Vital.columnId} = ?', whereArgs: [id]
//   );
//      return num;
//   }

//   Future<int> deleteAll() async {
//     _db = await DbConfig.getInstance();
//     int num = await _db.delete(Vital.tableName);
//     return num;
//   }

//   Future<int> update(Vital customer) async {
//     _db = await DbConfig.getInstance();
//     int num = await _db.update(
//       Vital.tableName,
//       Vital.toJson(),
//       where: '${Vital.columnId} = ?', whereArgs: [Vital.id]);
//     return num;
//   }

//   Future close() async => _db.close();
// }