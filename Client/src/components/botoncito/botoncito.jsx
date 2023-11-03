import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


initMercadoPago('TEST-b8dd0b27-3afb-474d-8967-f00b153b6c6b', { locale: 'es-AR' });

export function Botoncito() {
    return (
        <Wallet initialization={{ preferenceId: '1533378060-55a90e74-5e28-41da-aa89-a90cfd67321b', redirectMode: 'modal' }} />
    );
}
