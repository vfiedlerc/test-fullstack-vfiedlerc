import { Router } from 'express';
import os from 'os';
import si from 'systeminformation';
import { IInfoSODTO } from '@shared/dtos/IInfoSODTO';
import userRoutes from '../../../../modules/users/infra/http/routes';

const router = Router();

router.use('/user', userRoutes);
router.get('/info-so', async (req, res) => {
  const cpus = os.cpus();
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const diskInfo = await si.fsSize();
  const networkInterfaces = os.networkInterfaces();

  const info = {
    process: cpus[0].model,
    memory: Math.round(totalMemory / 1024 / 1024),
    memory_free: Math.round(freeMemory / 1024 / 1024),
    disk: [],
    ips: [],
  } as IInfoSODTO;

  diskInfo.forEach(disk => {
    info.disk.push(
      `- ${disk.mount}: ${Math.round(disk.size / 1024 / 1024)} MB`,
    );
  });
  Object.keys(networkInterfaces).forEach(interfaceName => {
    info.ips.push({
      name: `${interfaceName}:`,
      address: networkInterfaces[interfaceName].map(iface => {
        return `  - ${iface.address}`;
      }),
    });
  });

  res.status(200).json(info);
});

export default router;
