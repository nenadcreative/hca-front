import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function CalendarForm() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal 
	  calLink="registrar/secret"
	  style={{width:"100%",height:"100%",overflow:"scroll",}}
	  config={{layout: 'month_view'}}
    
	  
	/>;
  };