// home.tmpl.js

export const testTempl = `
<div class="{{ className }}">
   <span class="text" onClick="{{ handleClick }}">{{text}}</span><br>
   <span class="text">{{ user.info.firstName }}</span>
</div>
`;
