import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../../components/ui/dialog/Dialog';
import { CreateGame } from './create/Create';
import { UpdateGame } from './update/Update';
import { DetailsGame } from './details/Details';

export const GameModals = () => {
  const [activeModal, setActiveModal] = useState<
    'create' | 'details' | 'update' | null
  >(null);

  return (
    <Dialog>
      <DialogTrigger onClick={() => setActiveModal('create')}>
        New Game
      </DialogTrigger>

      {activeModal === 'create' && (
        <DialogContent>
          <CreateGame />
        </DialogContent>
      )}

      {activeModal === 'details' && (
        <DialogContent>
          <DetailsGame onEdit={() => setActiveModal('update')} />
        </DialogContent>
      )}

      {activeModal === 'update' && (
        <DialogContent>
          <UpdateGame />
        </DialogContent>
      )}
    </Dialog>
  );
};
