export enum Status {
    Success = 200,
    Error = 400,
    InvalidToken = 401,
    ExpiredToken = 402,
    EmptyToken = 407,
    WrongPassword = 408,
    UserNotFound = 409,
    BadJson = 411,
    MissingField = 412,
    MissingFiles = 413,
    InvalidEmail = 414,
    UnsafePassword = 415,
    DuplicatedUser = 416,
    CantActivateUser = 417,
    UnverifiedUser = 418,
    BlockedUser = 419,
    ErasedUser = 420,
    AppDisabled = 421,
    AppBlocked = 423,
    AppNotExists = 424,
    UnknownProfile = 425,
    NotAllowed = 426,
    ClientNotFound = 427,
    ClientNotActive = 428,
    ClientSuspended = 429,
    ClientDeleted = 430
}

export function getStatus(code: number): Status {
    return (Object.values(Status) as number[]).includes(code) ? code as Status : Status.Error;
}