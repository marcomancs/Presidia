#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
#  Gestione DVR Stone — Aggiorna l'indice degli aggiornamenti (manifest.json)
#  USO: doppio clic su questo file DOPO aver modificato i template / l'app.
#       Poi apri GitHub Desktop e fai "Commit to main" + "Push".
# ═══════════════════════════════════════════════════════════════════════════
cd "$(dirname "$0")" || exit 1

echo "════════════════════════════════════════════════════════════"
echo "  AGGIORNA INDICE — Gestione DVR Stone"
echo "════════════════════════════════════════════════════════════"
echo ""

python3 - "$@" <<'PY'
import hashlib, json, os, datetime, sys

ROOT = "."
APP_ZIP = "Gestione DVR Stone.zip"
SYNC_DIR = os.path.join("Supporto DVR Stone", "02_Supporto")

def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for ch in iter(lambda: f.read(1 << 20), b""):
            h.update(ch)
    return h.hexdigest()

# versione attuale dal manifest esistente (default)
attuale = ""
if os.path.exists("manifest.json"):
    try:
        attuale = str(json.load(open("manifest.json", encoding="utf-8")).get("app_version") or "")
    except Exception:
        pass

print(f"Versione attuale dell'app nel manifest: {attuale or '(nessuna)'}")
try:
    nuova = input(f"Numero versione di QUESTA release [INVIO = mantieni {attuale or '1.0'}]: ").strip()
except EOFError:
    nuova = ""
if not nuova:
    nuova = attuale or "1.0"

if not os.path.isdir(SYNC_DIR):
    print(f"\n[ERRORE] Non trovo la cartella '{SYNC_DIR}'.")
    print("Esegui questo file DENTRO la cartella 'esportazione REV'.")
    sys.exit(1)

files = {}
for dp, _, fns in os.walk(SYNC_DIR):
    for fn in fns:
        if fn == ".DS_Store":
            continue
        full = os.path.join(dp, fn)
        files[os.path.relpath(full, ROOT)] = sha256(full)

manifest = {
    "app_version": nuova,
    "updated": datetime.date.today().isoformat(),
    "app_zip": APP_ZIP,
    "app_zip_sha256": sha256(APP_ZIP) if os.path.exists(APP_ZIP) else None,
    "sync_prefix": "Supporto DVR Stone/02_Supporto/",
    "supporto_files": dict(sorted(files.items())),
}
json.dump(manifest, open("manifest.json", "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

print("")
print(f"  [OK] manifest.json aggiornato")
print(f"       versione app      : {nuova}")
print(f"       file di supporto  : {len(files)}")
print(f"       app .zip presente : {'si' if manifest['app_zip_sha256'] else 'NO (manca lo zip!)'}")
PY

echo ""
echo "════════════════════════════════════════════════════════════"
echo "  FATTO. Ora apri GitHub Desktop e:"
echo "    1) scrivi un titolo (es. 'aggiornati template cap. X')"
echo "    2) clic su 'Commit to main'"
echo "    3) clic su 'Push origin'"
echo "  Gli utenti riceveranno le novita' al prossimo avvio dell'app."
echo "════════════════════════════════════════════════════════════"
echo ""
read -n 1 -s -r -p "Premi un tasto per chiudere..."
echo ""
