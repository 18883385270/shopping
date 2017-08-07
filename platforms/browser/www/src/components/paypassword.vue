<template>
    <div class="pwdwarp">
        <input type="password" maxlength="6" pattern="[0-9]*">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.pwdwarp {
    
    width:17rem;border:1px solid #ddd;
    input {
        width:100%;
        padding: 1rem 0;border:0;
        text-indent: 1.8rem;
        letter-spacing: 2rem;
        font-size: 1.5rem;
        background:#efefef url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOS4yNSA1Ij48dGl0bGU+cGF5cGFzc3dvcmRiZzwvdGl0bGU+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+PGxpbmUgeDE9IjAuMTMiIHgyPSIwLjEzIiB5Mj0iNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2RkZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC4yNXB4Ii8+PGxpbmUgeDE9IjcuMzgiIHgyPSI3LjM4IiB5Mj0iNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2RkZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC4yNXB4Ii8+PGxpbmUgeDE9IjE0LjYzIiB4Mj0iMTQuNjMiIHkyPSI1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZGRkO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDowLjI1cHgiLz48bGluZSB4MT0iMjEuODgiIHgyPSIyMS44OCIgeTI9IjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNkZGQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuMjVweCIvPjxsaW5lIHgxPSIyOS4xMyIgeDI9IjI5LjEzIiB5Mj0iNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2RkZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC4yNXB4Ii8+PC9nPjwvZz48L3N2Zz4=") no-repeat center center;
        background-size:11rem;
        overflow: hidden;
        &:focus {
            outline: none;
        }
    }
}
</style>

