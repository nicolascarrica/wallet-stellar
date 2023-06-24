<script>
    export let message = '';
    export let type = 'info';
  </script>
  
  <div class="alert {type}">
    {#if type === 'info'}
      <span class="icon">ℹ️</span>
    {:else if type === 'success'}
      <span class="icon">✅</span>
    {:else if type === 'warning'}
      <span class="icon">⚠️</span>
    {:else if type === 'error'}
      <span class="icon">❌</span>
    {/if}
    <span class="message">{message}</span>
  </div>
  
  <style>
    .alert {
      display: flex;
      align-items: center;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px;
      margin-bottom: 10px;
    }
  
    .info {
      background-color: #e3f2fd;
      color: #2196f3;
    }
  
    .success {
      background-color: #e8f5e9;
      color: #4caf50;
    }
  
    .warning {
      background-color: #fff3e0;
      color: #ff9800;
    }
  
    .error {
      background-color: #ffebee;
      color: #f44336;
    }
  
    .icon {
      margin-right: 8px;
    }
  
    .message {
      font-weight: bold;
    }
  </style>