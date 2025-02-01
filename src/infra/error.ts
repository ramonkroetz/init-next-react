type CustomErrorProps = {
  name: string;
  message: string;
  status?: number;
  stack?: string;
};

export class CustomError extends Error {
  name: string;
  status?: number;

  constructor({
    cause,
    message,
    name,
    status,
  }: {
    cause: unknown;
    name: string;
    message: string;
    status?: number;
  }) {
    super(message, { cause });
    this.name = name;
    this.status = status;
  }

  toJSON(): CustomErrorProps {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
    };
  }
}

export function createCustomError(name: string, error: unknown) {
  if (error instanceof Error) {
    return new CustomError({
      name: name,
      message: error.message,
      cause: error,
    });
  }

  return new CustomError({
    name: name,
    cause: error,
    message: "An unexpected error occurred.",
  });
}
