import { Button } from "./Button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "./ui/alert-dialog";

export const Alert = ({
  open,
  onOpenChange,
  onCofirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCofirm: () => void;
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[320px] bg-neutral-3">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="font-sans !text-body-m-bold text-neutral-2">
            This action cannot be undone. This will delete your task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            typeStyle="primary"
            text={"Confirm"}
            onPress={() => {
              onCofirm();
            }}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
