class NonExistentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NonExistentError';
  }
}
module.exports = NonExistentError;
