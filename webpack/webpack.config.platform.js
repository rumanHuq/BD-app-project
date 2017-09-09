export const Client = process.env.PLATFORM === 'Client' && 'Client';
export const Server = process.env.PLATFORM === 'Server' && 'Server';
