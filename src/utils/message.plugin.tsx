import React from 'react'
import { useSnackbar, VariantType } from 'notistack'

const MESSAGES = {
    'log-out': 'Вы вышли из системы',
    'log-in': 'Вы вошли в систему',
    'auth/user-not-found': 'Пользователя с такой почтой не существует',
    'auth/wrong-password': 'Неверный пароль',
    // 'auth/user-not-found': '',
    // 'auth/user-not-found': '',
    // 'auth/user-not-found': '',
}


function MessagePlugin() {
    const { enqueueSnackbar } = useSnackbar();
    const showTooltip = (message: string, variant: VariantType) => {
        // enqueueSnackbar(String(MESSAGES[message]), { variant })
    }

    return { showTooltip }
}

export default MessagePlugin
