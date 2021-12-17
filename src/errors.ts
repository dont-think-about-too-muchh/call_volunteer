/* eslint-disable max-classes-per-file */
export class HttpError extends Error {
  code: number

  constructor(code: number, message?: string) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)

    this.name = new.target.name
    this.code = code
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(401, message)
    this.name = new.target.name
  }
}

export class BadRequestError extends HttpError {
  constructor(message?: string) {
    super(400, message)
    this.name = new.target.name
  }
}

export class ForbiddenError extends HttpError {
  constructor(message?: string) {
    super(403, message)
    this.name = new.target.name
  }
}

export class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(404, message)
    this.name = new.target.name
  }
}
