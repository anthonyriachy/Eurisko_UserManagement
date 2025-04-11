import { Button } from '../../atoms/Button/Button'
import { ButtonSize, ButtonVariant } from '../../atoms/Button'
import { UserActionsProps } from './UserActions.type'

function UserActions({onDelete,onEdit}:UserActionsProps) {
  return (
    <div className='flex items-center justify-end gap-[16px] px-[24px] mt-[16px] '>
        <Button onClick={onEdit} variant={ButtonVariant.PRIMARY} size={ButtonSize.SMALL}>
            Edit
        </Button>

        <Button onClick={onDelete} variant={ButtonVariant.DANGER} size={ButtonSize.SMALL}>
            Delete
        </Button>
    </div>
  )
}

export {UserActions}
