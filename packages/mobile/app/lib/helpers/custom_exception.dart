class CustomException implements Exception {
  final String data;

  CustomException(this.data);

  @override
  String toString() => data;
}
