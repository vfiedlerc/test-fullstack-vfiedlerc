import 'reflect-metadata';
import './shared/infra/http/container';
import { createConnection } from 'typeorm';
import os from 'os';
import si from 'systeminformation';
import { app } from './shared/infra/http/app';

createConnection().then(async () => {
  const cpus = os.cpus();
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const diskInfo = await si.fsSize();
  const networkInterfaces = os.networkInterfaces();

  console.log(`Processador: ${cpus[0].model}`);
  console.log(`Memória total: ${Math.round(totalMemory / 1024 / 1024)} MB`);
  console.log(`Memória livre: ${Math.round(freeMemory / 1024 / 1024)} MB`);
  console.log(`Espaço em disco:`);
  diskInfo.forEach(disk => {
    console.log(`- ${disk.mount}: ${Math.round(disk.size / 1024 / 1024)} MB`);
  });
  console.log(`IP's das interfaces disponíveis:`);
  Object.keys(networkInterfaces).forEach(interfaceName => {
    console.log(`- ${interfaceName}:`);
    networkInterfaces[interfaceName].forEach(iface => {
      console.log(`  - ${iface.address}`);
    });
  });

  app.listen(3333, () => {
    console.log(`Server started on port 3333.`);
  });
}).catch( error => console.log('aqui'));