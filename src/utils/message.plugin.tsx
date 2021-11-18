import React from 'react'
import { useSnackbar, VariantType } from 'notistack'

function MessagePlugin() {
    const { enqueueSnackbar } = useSnackbar();
    const showTooltip = (message: string, variant: VariantType) => {
        enqueueSnackbar(message, { variant })
    }

    return { showTooltip }
}

export default MessagePlugin
