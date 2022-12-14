---
sidebarDepth: 3
---

# zkSync contracts v8 upgrade announcement

<!-- markdownlint-disable MD034 -->

We will start the notice period to upgrade zkSync contracts to a new version today.

## Changes

The exact changes in the code of the contracts
[can be found here](https://github.com/matter-labs/zksync/compare/contracts-7...contracts-8?file-filters[]=.sol).

### Added

- `cutUpgradeNoticePeriodBySignature` a function for approving instant upgrade by security council members.
- `Create2Factory.sol` - the smart contract that used to deploys targets.
- New event `ApproveCutUpgradeNoticePeriod(address)` emitted after security council member approve upgrade.
- Check that the deposited amount is non-zero.

### Changed

- Upgrade can be initialized/finished in case of exodus mode.
- `cutUpgradeNoticePeriod` takes the hash of targets to which upgrades initialized.
- `WithdrawalPending` - event parameters changed.
- `Withdraw`/`ForcedExit`/`FullExit` may be executed on `executeBlocks` or stored as pending depending on the input
parameters when executing the block.
- Minor gas optimizations are used.
