import { Button } from '../../../../components/ui/button/Button';
import { useDialog } from '../../../../hooks/useDialog';

interface DeleteCategoryConfirmProps {
  categoryName: string;
  onConfirm: () => void;
}

export function DeleteCategoryConfirm({
  categoryName,
  onConfirm,
}: DeleteCategoryConfirmProps) {
  const { closeDialog } = useDialog();

  const handleDelete = () => {
    onConfirm();
    closeDialog();
  };

  return (
    <div style={{ padding: 16 }}>
      <p>
        Tem certeza que deseja excluir a categoria <b>{categoryName}</b>?
      </p>
      <Button onClick={handleDelete}>Confirmar</Button>
    </div>
  );
}