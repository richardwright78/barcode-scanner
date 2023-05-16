import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  Button,
  Tag
} from '@chakra-ui/react';

interface ScanDrawerProps {
  isOpen: boolean;
  setDrawerOpen: any;
  scans: string[];
  setScans: any
}

const ScanDrawer:React.FC<ScanDrawerProps> = ({ isOpen, setDrawerOpen, scans, setScans }:ScanDrawerProps) => {

  return (
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={() => null}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setDrawerOpen(false)}/>
          <DrawerHeader>Scanned Documents</DrawerHeader>
          <DrawerBody>
            <List>
              {scans.map((barcode, index) => (
                <ListItem key={`${barcode}-${index}`} marginBottom="0.5rem">
                  <Tag padding="0.5rem">{barcode}</Tag>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme='blue' mr={3} onClick={() => setScans([])} width="100%">
              Clear Scans
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export { ScanDrawer }