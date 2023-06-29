<script>
    import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
  
    export let type;
    export let message;
    export let show;
  
    // Función para mostrar el toast
    function showToast() {
      toasts.add({
        title: type === 'success' ? 'Success' : 'Error',
        description: message,
        duration: 5000,
        placement: 'bottom-right',
        type: type,
        theme: 'dark',
      });
    }
  
    // Mostrar el toast automáticamente cuando show es verdadero
    $: {
      if (show) {
        showToast();
      }
    }
  </script>
  
  <ToastContainer let:data={data}>
    <FlatToast {data} />
  </ToastContainer>