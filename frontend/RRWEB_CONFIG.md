# rrweb Configuration Guide

## Overview
rrweb (record and replay the web) is used for session recording and debugging. It is **conditionally loaded** based on the environment to protect user privacy in production.

---

## Environment-Based Loading

### 🚫 **Production** (pedizone.com)
- **rrweb**: DISABLED
- **User tracking**: DISABLED
- **Privacy**: Fully protected
- **Performance**: Optimized (no extra scripts)

### ✅ **Staging/Preview** (preview.emergentagent.com)
- **rrweb**: ENABLED
- **Session recording**: ENABLED
- **Debug**: Available
- **Testing**: Full functionality

### ✅ **Development** (localhost)
- **rrweb**: ENABLED
- **Local testing**: Available

---

## Configuration

### Environment Variables

**.env (default - staging/preview)**
```bash
REACT_APP_ENVIRONMENT=staging
```

**.env.production (production)**
```bash
REACT_APP_ENVIRONMENT=production
```

**.env.development (local)**
```bash
REACT_APP_ENVIRONMENT=development
```

---

## How It Works

### Detection Logic (App.js)

```javascript
// Method 1: Environment variable (preferred)
const appEnvironment = process.env.REACT_APP_ENVIRONMENT;

// Method 2: Hostname detection (fallback)
const hostname = window.location.hostname;
const isProductionHostname = hostname === 'pedizone.com' || 
                             hostname === 'www.pedizone.com';

// Load rrweb only if NOT production
const shouldLoadRrweb = appEnvironment 
  ? appEnvironment !== 'production'
  : !isProductionHostname;
```

---

## Testing

### Verify rrweb Loading

Open browser console and check:

**Production (pedizone.com):**
```
🚫 rrweb disabled (production mode)
```

**Staging (preview.emergentagent.com):**
```
✅ rrweb loaded { environment: 'staging', hostname: '...' }
```

**Development (localhost):**
```
✅ rrweb loaded { environment: 'development', hostname: 'localhost' }
```

---

## Netlify Deployment

### Production Build
Netlify will use `.env.production`:
- `REACT_APP_ENVIRONMENT=production`
- rrweb will NOT load ✅

### Preview Builds
Netlify will use `.env`:
- `REACT_APP_ENVIRONMENT=staging`
- rrweb will load ✅

---

## Security & Privacy

✅ **GDPR Compliant**: No user tracking in production
✅ **Performance**: ~150KB saved in production builds
✅ **Privacy**: User behavior not recorded on live site
✅ **Testing**: Full debug capabilities in non-production environments

---

## Troubleshooting

### rrweb not loading in staging:
1. Check `.env` file has `REACT_APP_ENVIRONMENT=staging`
2. Rebuild: `yarn build`
3. Check console logs

### rrweb still loading in production:
1. Verify `.env.production` has `REACT_APP_ENVIRONMENT=production`
2. Check Netlify environment variables
3. Clear cache and redeploy

---

## Scripts Loaded (when enabled)

1. **rrweb Library**: `https://unpkg.com/rrweb@latest/dist/rrweb.min.js`
2. **rrweb Recorder**: `https://d2adkz2s9zrlge.cloudfront.net/rrweb-recorder-20250919-1.js`

Both scripts are loaded **asynchronously** and **dynamically** in non-production environments only.
