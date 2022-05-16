import { GardenBest, GardenBestListBox } from './GardenBestList.styles';
import { motion } from 'framer-motion';

export default function GardenBestListUI() {
  return (
    <GardenBestListBox>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest />
      </motion.div>
    </GardenBestListBox>
  );
}
