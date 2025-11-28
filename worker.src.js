const ResponseHelper = {
	html(content, status = 200) {
		return new Response(content, {
			status,
			headers: {
				'Content-Type': 'text/html; charset=UTF-8'
			}
		})
	},
	json(data, status = 200) {
		return new Response(JSON.stringify(data), {
			status,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},
	redirect(url, status = 302) {
		return Response.redirect(url, status)
	},
	error(message, status = 500) {
		return new Response(message, {
			status
		})
	}
};
const StyleManager = {
	baseStyles: {
		reset: `*{margin:0;padding:0;box-sizing:border-box}`,
		body: `body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;background:linear-gradient(135deg,#000814 0%,#001d3d 50%,#003566 100%);color:#e0f7ff;text-align:center;position:relative;overflow-x:hidden;user-select:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text}`,
		container: `.container{max-width:500px;width:100%;background:rgba(0,20,40,.8);padding:40px;border-radius:20px;backdrop-filter:blur(15px);box-shadow:0 15px 35px rgba(0,0,0,.4),0 0 50px rgba(0,150,255,.2);border:1px solid rgba(0,200,255,.4)}`,
		headings: `h1{font-size:2rem;margin-bottom:25px;background:linear-gradient(135deg,#00b4d8 0%,#0077b6 50%,#0096c7 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700;text-shadow:0 0 20px rgba(0,180,216,.5)}`,
		toast: `.toast-container{position:fixed;bottom:20px;right:20px;z-index:1000;display:flex;flex-direction:column;align-items:flex-end;gap:10px}.toast{background:rgba(0,20,40,.95);color:#e0f7ff;padding:15px 20px;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,.3),0 0 20px rgba(0,150,255,.2);border:1px solid rgba(255,107,107,.3);border-left:4px solid#ff6b6b;animation:slideInRight.3s ease,fadeOut.3s ease 4.7s forwards;font-weight:600;white-space:nowrap;text-align:center;line-height:1.4;transform:translateX(0);opacity:1;position:relative;display:inline-block}.toast.success{border-left-color:#00d500;border-color:rgba(0,213,0,.3)}`,
		animations: `@keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fadeOut{to{transform:translateX(100%);opacity:0;max-height:0;padding-top:0;padding-bottom:0;margin-bottom:-10px}}.loading{opacity:0.7;position:relative}.loading::after{content:"";position:absolute;top:50%;left:50%;width:20px;height:20px;margin:-10px 0 0-10px;border:2px solid#ffffff;border-radius:50%;border-top-color:transparent;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}`
	},
	formStyles: {
		input: `input,textarea{width:100%;padding:15px;border:2px solid rgba(0,150,255,.4);border-radius:10px;background:rgba(0,30,60,.6);color:#e0f7ff;font-size:16px;margin-bottom:20px;transition:all.3s ease}input:focus,textarea:focus{outline:none;border-color:#00b4d8;box-shadow:0 0 0 3px rgba(0,180,216,.3),0 0 20px rgba(0,150,255,.3)}input::placeholder,textarea::placeholder{color:rgba(224,247,255,.6)}`,
		textarea: `textarea{height:250px;padding:20px;font-family:'Courier New',monospace;resize:none;cursor:auto!important}textarea::-webkit-scrollbar{width:12px;cursor:default!important}textarea::-webkit-scrollbar-track{background:rgba(0,30,60,.4);border-radius:0 8px 8px 0}textarea::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#0077b6 0%,#00b4d8 100%);border-radius:6px;border:2px solid rgba(0,30,60,.4)}textarea::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#00b4d8 0%,#0077b6 100%)}textarea::-webkit-scrollbar-thumb:active{background:linear-gradient(135deg,#0096c7 0%,#006994 100%)}textarea::-webkit-scrollbar-corner{background:rgba(0,20,40,.8)}textarea{scrollbar-width:thin;scrollbar-color:#0077b6 rgba(0,30,60,.4)}`,
		button: `button{background:linear-gradient(135deg,#0077b6 0%,#00b4d8 100%);color:#000814;border:none;padding:15px 30px;border-radius:25px;cursor:pointer;font-size:16px;font-weight:600;transition:all.3s ease;min-width:120px}button:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(0,0,0,.3),0 0 30px rgba(0,180,216,.4);background:linear-gradient(135deg,#00b4d8 0%,#0077b6 100%)}button:disabled{opacity:0.6;cursor:not-allowed}button.home{background:linear-gradient(135deg,#00b4d8 0%,#0096c7 100%)}button.home:hover{background:linear-gradient(135deg,#0096c7 0%,#00b4d8 100%)}.visit-btn{background:linear-gradient(135deg,#0077b6 0%,#00b4d8 100%);color:#000814;border:none;padding:10px 20px;border-radius:8px;font-size:.9rem;font-weight:600;cursor:pointer;transition:all.3s ease;min-width:100px}.visit-btn:hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(0,180,216,.4)}`
	},
	mainPageStyles: {
		layout: `.container{max-width:1200px;width:100%;text-align:center;z-index:1;background:none;padding:20px;backdrop-filter:none;box-shadow:none;border:none}.header{margin-bottom:40px;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.header h1{font-size:3rem;margin-bottom:10px;background:linear-gradient(135deg,#00b4d8 0%,#0077b6 50%,#0096c7 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700;letter-spacing:1px;text-shadow:0 2px 10px rgba(0,0,0,.2)}.nav-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:25px;margin-top:30px;width:100%}.footer{margin-top:50px;color:#e0f7ff;opacity:.7;font-size:.9rem;text-shadow:1px 1px 2px rgba(0,0,0,.3)}.last-update{margin-top:10px;font-size:.8rem;opacity:.6}`,
		cards: `.nav-card{background:rgba(0,20,40,.8);border-radius:20px;padding:25px;color:#e0f7ff;transition:all.3s ease;box-shadow:0 10px 30px rgba(0,0,0,.3),0 0 20px rgba(0,150,255,.2);border:1px solid rgba(0,200,255,.4);position:relative;backdrop-filter:blur(10px);display:flex;flex-direction:column;height:100%}.nav-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,.4),0 0 40px rgba(0,180,216,.3);background:rgba(0,20,40,.9);border-color:rgba(0,200,255,.6)}.card-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;position:relative}.card-header h3{font-size:1.4rem;margin:0;color:#f0f7ff;text-align:left;font-weight:600;flex:1;padding-right:40px}.card-content{flex:1;display:flex;flex-direction:column;gap:15px}.card-footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px;padding-top:15px;border-top:1px solid rgba(0,150,255,.3)}`,
		status: `.status-indicator{position:absolute;top:0;right:0;display:flex;align-items:center;gap:8px}.status-dot{width:20px;height:20px;border-radius:50%;display:inline-block;border:2px solid rgba(255,255,255,.3)}.status-dot[data-status="online"]{background:#00d500;box-shadow:0 0 10px rgba(0,255,0,.5)}.status-dot[data-status="offline"]{background:#d50000;box-shadow:0 0 10px rgba(255,0,0,.5)}.url-display{display:flex;align-items:center;gap:10px;background:rgba(0,30,60,.6);border:1px solid rgba(0,150,255,.3);border-radius:12px;padding:15px;font-family:'Courier New',monospace;font-size:.9rem;color:#c0e7ff;cursor:default}.url-icon{font-size:1.2rem}.status-details{display:flex;flex-direction:column;gap:8px;background:rgba(0,30,60,.6);padding:15px;border-radius:12px;border:1px solid rgba(0,150,255,.3)}.status-item{display:flex;justify-content:space-between;align-items:center;font-size:.85rem}.status-label{color:#a0d0ff;font-weight:500}.status-value{font-weight:600;padding:2px 8px;border-radius:6px;font-size:.8rem}.status-value.success{background:rgba(0,255,0,.15);color:#00ff00}.status-value.error{background:rgba(255,0,0,.15);color:#ff0000}.visit-time{font-size:.8rem;color:#a0d0ff}`,
		responsive: `@media(min-width:1025px){.nav-grid{grid-template-columns:repeat(2,1fr)}.nav-grid:has(.nav-card:only-child){grid-template-columns:minmax(400px,500px);justify-content:center}}@media(max-width:1024px)and(min-width:769px){.nav-grid{grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:20px}.header h1{font-size:2.5rem}.nav-grid:has(.nav-card:only-child){grid-template-columns:minmax(350px,450px);justify-content:center}}@media(max-width:768px){body{padding:15px;justify-content:flex-start}.container{max-width:100%}.nav-grid{grid-template-columns:1fr;gap:15px;margin-top:20px}.header{margin-bottom:30px}.header h1{font-size:2rem;margin-bottom:5px}.nav-card{padding:20px}.card-header h3{font-size:1.2rem;padding-right:35px}.status-dot{width:18px;height:18px}.url-display{padding:12px;font-size:0.85rem}.status-details{padding:12px}.card-footer{flex-direction:column;gap:10px;align-items:stretch}.visit-btn{width:100%}.nav-grid:has(.nav-card:only-child){grid-template-columns:1fr;max-width:500px;margin-left:auto;margin-right:auto}}@media(max-width:480px){body{padding:10px}.header h1{font-size:1.8rem}.nav-card{padding:15px;border-radius:15px}.card-header h3{font-size:1.1rem;padding-right:30px}.status-dot{width:16px;height:16px}.url-display{padding:10px;font-size:0.8rem}.status-details{padding:10px}.nav-grid:has(.nav-card:only-child){max-width:100%}}@media(max-width:360px){.header h1{font-size:1.6rem}.nav-card{padding:12px}.card-header h3{font-size:1rem}}`
	},
	adminPageStyles: {
		layout: `.container{max-width:700px}.form-group{margin-bottom:25px}label{display:block;font-size:18px;margin-bottom:12px;font-weight:600;color:rgba(224,247,255,.95)}.button-group{display:flex;justify-content:center;gap:15px;flex-wrap:wrap;margin:25px 0}.current-count{color:rgba(224,247,255,.9);font-size:16px;margin-top:10px;font-weight:600}.instructions{background:rgba(0,30,60,.6);padding:20px;border-radius:10px;margin:20px 0;text-align:left;font-size:14px;line-height:1.5;color:#b3e0ff}`,
		responsive: `@media(max-width:768px){.container{padding:30px 20px;margin:10px}.button-group{flex-direction:column;align-items:center}.button-group button{width:100%;max-width:300px}}@media(max-width:480px){.container{padding:20px 15px}label{font-size:16px}}`
	},
	kvErrorPageStyles: {
		layout: `.kv-error-page.container{text-align:center;padding:60px 40px;max-width:600px}.kv-error-page h1{font-size:2.5rem;margin-bottom:30px;color:#ff6b6b}.kv-error-page p{font-size:1.2rem;color:#b3e0ff;line-height:1.6;margin-bottom:15px}.kv-error-page.error-icon{font-size:4rem;margin-bottom:20px}`,
		content: `.error-details{background:rgba(255,0,0,0.1);padding:25px;border-radius:12px;margin:30px 0;border:1px solid rgba(255,107,107,0.3);text-align:left}.solution{background:rgba(0,180,216,0.1);padding:25px;border-radius:12box;border:1px solid rgba(0,180,216,0.3);text-align:left}.solution p{margin-bottom:10px}.error-details strong,.solution strong{color:#ffb3b3}`,
		button: `.kv-error-page button{background:linear-gradient(135deg,#0077b6 0%,#00b4d8 100%);color:#000814;border:none;padding:15px 30px;border-radius:25px;cursor:pointer;font-size:16px;font-weight:600;transition:all.3s ease;min-width:200px;margin-top:20px}.kv-error-page button:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(0,0,0,.3),0 0 30px rgba(0,180,216,.4)}`
	},
	loginPageStyles: {
		layout: `.container{max-width:500px}.form-group{margin-bottom:25px}label{display:block;font-size:18px;margin-bottom:12px;font-weight:600;color:rgba(224,247,255,.95)}.button-group{display:flex;justify-content:center;gap:15px;flex-wrap:wrap;margin:25px 0}.instructions{background:rgba(0,30,60,.6);padding:20px;border-radius:10px;margin:20px 0;text-align:left;font-size:14px;line-height:1.5;color:#b3e0ff}`,
		responsive: `@media(max-width:768px){.container{padding:30px 20px;margin:10px}.button-group{flex-direction:column;align-items:center}.button-group button{width:100%;max-width:300px}}@media(max-width:480px){.container{padding:20px 15px}label{font-size:16px}.instructions{padding:15px;font-size:13px}}`
	},
	combineStyles(styleGroups) {
		return styleGroups.map(group => typeof group === 'string' ? group : Object.values(group).join('')).join('')
	},
	getBaseStyles() {
		return this.combineStyles([this.baseStyles])
	},
	getMainPageStyles() {
		return this.combineStyles([this.baseStyles.reset, this.baseStyles.body, this.mainPageStyles.layout, this.mainPageStyles.cards, this.mainPageStyles.status, this.baseStyles.toast, this.baseStyles.animations, this.formStyles.button, this.mainPageStyles.responsive])
	},
	getAdminPageStyles() {
		return this.combineStyles([this.baseStyles.reset, this.baseStyles.body, this.baseStyles.container, this.baseStyles.headings, this.baseStyles.toast, this.baseStyles.animations, this.formStyles.input, this.formStyles.textarea, this.formStyles.button, this.adminPageStyles.layout, this.adminPageStyles.responsive])
	},
	getLoginPageStyles() {
		return this.combineStyles([this.baseStyles.reset, this.baseStyles.body, this.baseStyles.container, this.baseStyles.headings, this.baseStyles.toast, this.baseStyles.animations, this.formStyles.input, this.formStyles.button, this.loginPageStyles.layout, this.loginPageStyles.responsive])
	},
	getKVErrorPageStyles() {
		return this.combineStyles([this.baseStyles.reset, this.baseStyles.body, this.baseStyles.container, this.baseStyles.headings, this.baseStyles.toast, this.baseStyles.animations, this.kvErrorPageStyles.layout, this.kvErrorPageStyles.content, this.kvErrorPageStyles.button])
	}
};
function generatePage(pageType, data = {}) {
	const pageContents = {
		main: () => {
			function generateSiteCards(sites) {
				return sites.map(site => `
		<div class="nav-card">
			<div class="card-header">
				<h3>${site.name}</h3>
			</div>
			<div class="card-content">
				<div class="url-display">
					<span class="url-icon">🌐</span>
					<span class="url-text">${site.displayUrl}</span>
				</div>
				<div style="display: flex; justify-content: flex-end; margin-top: 15px;">
					<button class="visit-btn" onclick="window.open('${site.url}', '_blank')">访问网站</button>
				</div>
			</div>
		</div>
	`).join('')
			}

			const sites = data.sites || [];
			const siteCards = generateSiteCards(sites);
			const styles = StyleManager.getMainPageStyles();
			const content = `<div class="toast-container" id="toastContainer"></div><div class="container"><div class="header"><h1>网站导航</h1></div><div class="nav-grid">${siteCards}</div><div class="footer"><p>Powered by Cloudflare Workers</p></div></div>`;
			const script = `function showToast(message, isError = false) {
				const toastContainer = document.getElementById('toastContainer');
				if (!toastContainer) return;

				const toast = document.createElement('div');
				toast.className = 'toast' + (isError ? '' : ' success');
				toast.textContent = message;
				toastContainer.appendChild(toast);

				setTimeout(() => {
					if (toast.parentNode) {
						toast.parentNode.removeChild(toast);
					}
				}, 5000);
			}`;

			return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>网站导航</title><style>${styles}</style></head><body>${content}<script>${script}</script></body></html>`;
		},

		admin: () => {
			const message = data.message || '';
			const currentUrls = data.currentUrls || '';
			const siteCount = currentUrls ? currentUrls.split('\n').filter(url => url.trim()).length : 0;
			const styles = StyleManager.getAdminPageStyles();
			const content = `<div class="toast-container" id="toastContainer"></div><div class="container"><h1>网站配置</h1><form id="adminForm" method="POST"><div class="form-group"><label for="urls">网站域名列表（每行一个域名）</label><textarea id="urls" name="urls" placeholder="请输入网站域名，每行一个">${currentUrls}</textarea><div class="current-count">当前配置：${siteCount}个网站</div></div><div class="instructions"><strong>配置说明：</strong><br>• 每行输入一个域名（不需要输入http://或https://）<br>• 保存配置后将自动返回主页<br>• 清空所有内容并保存可以删除所有网站</div><div class="button-group"><input type="hidden" name="action" value="save"><button type="submit" id="saveBtn">💾 保存配置</button><button type="button" onclick="window.location.href='/'" class="home">🏠 返回主页</button></div></form></div>`;

			const script = `function showToast(message, isError = false) {
				const toastContainer = document.getElementById('toastContainer');
				if (!toastContainer) return;

				const toast = document.createElement('div');
				toast.className = 'toast' + (isError ? '' : ' success');
				toast.textContent = message;
				toastContainer.appendChild(toast);

				setTimeout(() => {
					if (toast.parentNode) {
						toast.parentNode.removeChild(toast);
					}
				}, 5000);
			}

			${message ? `setTimeout(() => showToast('${message}', ${message.includes('失败')}), 100);` : ''}`;

			return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>网站配置</title><style>${styles}</style></head><body>${content}<script>${script}</script></body></html>`;
		},

		login: () => {
			const message = data.message || '';
			const styles = StyleManager.getLoginPageStyles();
			const content = `<div class="toast-container" id="toastContainer"></div><div class="container"><h1>身份验证</h1><form id="loginForm" method="POST"><input type="password" name="password" placeholder="请输入管理密码" required><input type="hidden" name="action" value="login"><button type="submit" id="loginBtn">验证身份</button></form></div>`;

			const script = `function showToast(message, isError = false) {
				const toastContainer = document.getElementById('toastContainer');
				if (!toastContainer) return;

				const toast = document.createElement('div');
				toast.className = 'toast' + (isError ? '' : ' success');
				toast.textContent = message;
				toastContainer.appendChild(toast);

				setTimeout(() => {
					if (toast.parentNode) {
						toast.parentNode.removeChild(toast);
					}
				}, 5000);
			}

			${message ? `setTimeout(() => showToast('${message}', true), 100);` : ''}`;

			return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>身份验证</title><style>${styles}</style></head><body>${content}<script>${script}</script></body></html>`;
		},

		setup: () => {
			const message = data.message || '';
			const styles = StyleManager.getLoginPageStyles();
			const content = `<div class="toast-container" id="toastContainer"></div><div class="container"><h1>🔐 首次设置</h1><form id="setupForm" method="POST"><input type="password" name="new_password" placeholder="设置管理密码" required><input type="password" name="confirm_password" placeholder="确认管理密码" required><input type="hidden" name="action" value="set_password"><div class="instructions"><strong>注意：</strong><br>• 请牢记您设置的密码<br>• 每次访问管理页面都需要输入密码</div><button type="submit" id="setupBtn">设置密码</button></form></div>`;

			const script = `function showToast(message, isError = false) {
				const toastContainer = document.getElementById('toastContainer');
				if (!toastContainer) return;

				const toast = document.createElement('div');
				toast.className = 'toast' + (isError ? '' : ' success');
				toast.textContent = message;
				toastContainer.appendChild(toast);

				setTimeout(() => {
					if (toast.parentNode) {
						toast.parentNode.removeChild(toast);
					}
				}, 5000);
			}

			${message ? `setTimeout(() => showToast('${message}', true), 100);` : ''}`;

			return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>首次设置 - 网站管理</title><style>${styles}</style></head><body>${content}<script>${script}</script></body></html>`;
		},

		kverror: () => {
			const styles = StyleManager.getKVErrorPageStyles();
			const content = `<div class="container kv-error-page"><h1>❌ KV空间未绑定</h1><p>请检查Cloudflare Workers的KV命名空间绑定配置</p></div>`;

			const script = `function showToast(message, isError = false) {
				const toastContainer = document.getElementById('toastContainer');
				if (!toastContainer) return;

				const toast = document.createElement('div');
				toast.className = 'toast' + (isError ? '' : ' success');
				toast.textContent = message;
				toastContainer.appendChild(toast);

				setTimeout(() => {
					if (toast.parentNode) {
						toast.parentNode.removeChild(toast);
					}
				}, 5000);
			}`;

			return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>错误 - KV空间未绑定</title><style>${styles}</style></head><body>${content}<script>${script}</script></body></html>`;
		}
	};

	const pageGenerator = pageContents[pageType];
	if (pageGenerator) {
		return pageGenerator();
	}

	const styles = StyleManager.getBaseStyles();
	const content = '<div class="container"><h1>404 - 页面未找到</h1></div>';
	const script = `function showToast(message, isError = false) {
		const toastContainer = document.getElementById('toastContainer');
		if (!toastContainer) return;

		const toast = document.createElement('div');
		toast.className = 'toast' + (isError ? '' : ' success');
		toast.textContent = message;
		toastContainer.appendChild(toast);

		setTimeout(() => {
			if (toast.parentNode) {
				toast.parentNode.removeChild(toast);
			}
		}, 5000);
	}`;
	return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>页面未找到</title><style>${styles}</style></head><body>${content}<script>${script}</script></body></html>`;
}
const PasswordHelper = {
	async hashPassword(password) {
		const encoder = new TextEncoder();
		const data = encoder.encode(password);
		const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
	},
	async verifyPassword(password, hashedPassword) {
		const hashedInput = await this.hashPassword(password);
		return hashedInput === hashedPassword
	}
};
const ConfigManager = {
	async getSites(env) {
		try {
			const config = await env.kv.get('SITES_CONFIG');
			if (!config) return [];
			return JSON.parse(config).map((url, index) => ({
				name: `网站${index + 1}`,
				url: 'https://' + url,
				displayUrl: url,
			}))
		} catch {
			return []
		}
	},
	async saveSites(env, urlText) {
		const decodedText = decodeURIComponent(urlText);
		const urls = decodedText.split(/\r?\n/).map(url => url.trim()).filter(url => url && url.length > 0).filter(url => !/^\s*$/.test(url)).map(url => url.replace(/^https?:\/\//, '').split('/')[0]).filter(url => url.length > 0);
		await env.kv.put('SITES_CONFIG', JSON.stringify(urls));
		return urls
	}
};
async function getCurrentUrls(env) {
	try {
		const config = await env.kv.get('SITES_CONFIG');
		return config ? JSON.parse(config).join('\n') : ''
	} catch {
		return ''
	}
}
async function handleRequest(request, env) {
	const url = new URL(request.url);
	if (request.method === 'POST') {
		const formData = await request.formData();
		const action = formData.get('action');
		const storedHashedPassword = await env.kv.get('ADMIN_PASSWORD_HASH');
		if (!storedHashedPassword) {
			if (action === 'set_password') {
				const newPassword = formData.get('new_password');
				const confirmPassword = formData.get('confirm_password');
				if (newPassword && newPassword === confirmPassword) {
					if (newPassword.length < 8) {
						return ResponseHelper.html(generatePage('setup', { message: '密码长度至少8位' }));
					}
					const hashedPassword = await PasswordHelper.hashPassword(newPassword);
					await env.kv.put('ADMIN_PASSWORD_HASH', hashedPassword);
					const currentUrls = await getCurrentUrls(env);
					return ResponseHelper.html(generatePage('admin', { message: '密码设置成功', currentUrls }));
				}
				return ResponseHelper.html(generatePage('setup', { message: '两次输入的密码不一致' }));
			}
		}
		if (action === 'login') {
			const inputPassword = formData.get('password');
			const isValid = await PasswordHelper.verifyPassword(inputPassword, storedHashedPassword);
			if (!isValid) {
				return ResponseHelper.html(generatePage('login', { message: '密码错误，请重新输入' }));
			}
			const currentUrls = await getCurrentUrls(env);
			return ResponseHelper.html(generatePage('admin', { message: '登录成功', currentUrls }));
		}
		if (action === 'save') {
			try {
				await ConfigManager.saveSites(env, formData.get('urls'));
				return ResponseHelper.redirect(new URL('/', request.url).toString());
			} catch (error) {
				const currentUrls = await getCurrentUrls(env);
				return ResponseHelper.html(generatePage('admin', { message: '保存失败：' + error.message, currentUrls }));
			}
		}
		return ResponseHelper.error('未知操作');
	}
	if (url.pathname === '/admin') {
		const storedHashedPassword = await env.kv.get('ADMIN_PASSWORD_HASH');
		if (!storedHashedPassword) {
			return ResponseHelper.html(generatePage('setup'));
		}
		return ResponseHelper.html(generatePage('login'));
	}
	const sites = await ConfigManager.getSites(env);
	if (sites.length === 0) {
		return ResponseHelper.redirect(new URL('/admin', request.url).toString());
	}
	return ResponseHelper.html(generatePage('main', { sites: sites }));
}
export default {
	async fetch(request, env, ctx) {
		try {
			if (!env.kv) {
				return ResponseHelper.html(generatePage('kverror'));
			}
			return await handleRequest(request, env);
		} catch (error) {
			return ResponseHelper.error('服务器内部错误');
		}
	}
};
