import { GardenBestListBox } from "./GardenBestList.styles";
import { motion } from "framer-motion";
import GardenBestBox from "./GardenBestBox";
import { v4 as uuidv4 } from "uuid";

export default function GardenBestListUI(props: any) {
  return (
    <GardenBestListBox>
      {props.data?.fetchBoards.map((el: any) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          key={String(uuidv4())}
        >
          <GardenBestBox el={el} />
        </motion.div>
      ))}
    </GardenBestListBox>
  );
}
