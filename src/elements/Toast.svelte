<script>
    import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
  
    export let type;
    export let message;
    export let show;
  
    
    function showToast() {
      toasts.add({
        title: type === 'success' ? 'Success' : 'Error',
        description: message,
        duration: 9000,
        placement: 'bottom-right',
        type: type,
        theme: 'dark',
      });
    }
  
    
    $: {
      if (show) {
        showToast();
      }
    }
  </script>
  
  <ToastContainer let:data={data}>
    <FlatToast {data} />
  </ToastContainer>