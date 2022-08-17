import { toast, ToastItem, ToastOptions } from 'react-toastify';

type IToastOption={
  message: string, 
  customOption?:ToastOptions,
  onClose?:()=>void,
}
const useResultSuccessOrErrorToast = () => {
  const option: ToastOptions = {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    // onClose: () => window.alert('Called when I close')
  };
  // const unsubscribe = (message:string)=>{
  //   const subscribe = toast.onChange((payload: ToastItem, ) => {
  //     switch (payload.status) {
  //       case "removed":
  //         if(message)toast.success(message,option, )
  //         break;
  //     }
  //   });
  //   subscribe()
  // }


  const success = ({message, customOption,onClose}:IToastOption) => {
    customOption? toast.success(message, {...option, ...customOption})
    : toast.success(message,option, )
    toast.onChange((payload: ToastItem, ) => {
      switch (payload.status) {
        case "removed":
          if(onClose)onClose()
          break;
      }
    });
  };

  const error = ({message, customOption,onClose}:IToastOption) => {
    customOption? toast.error(message, {...option, ...customOption}): toast.error(message,option, )
    toast.onChange((payload: ToastItem, ) => {
      switch (payload.status) {
        case "removed":
          if(onClose)onClose()
          break;
      }
    });
  };

  return { success, error,  };
};

export default useResultSuccessOrErrorToast;

//출처 : https://github.com/Circlewee/wanted-pre-onboarding-challenge-fe-1/blob/first-refactor/src/hooks/useToast.ts