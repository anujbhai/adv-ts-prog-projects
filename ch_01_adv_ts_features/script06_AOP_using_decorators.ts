interface IDecoratorExample {
	AnyoneCanRun(args: string): void;
	AdminOny(args: string): void;
}

class NoRoleCheck implements IDecoratorExample {
	AnyoneCanRun(args: string): void {
		if (!IsInRole("user")) {
			console.log(`${currentUser.user} is not in the user role.`);
			return;
		}
		console.log(args);
	}

	AdminOny(args: string): void {
		if (!IsInRole("admin")) {
			console.log(`${currentUser.user} is not in the admin role.`);
			// return;
		}
		console.log(args);
	}
}

let currentUser = {user: "peter", roles: [{role: "user"}, {role: "admin"}]};

function TestDecoratorExample(decoratorMethod: IDecoratorExample) {
	console.log(`Current user: ${currentUser.user}`);
	decoratorMethod.AnyoneCanRun("Running as user");
	decoratorMethod.AdminOny("Running as admin");
}

TestDecoratorExample(new NoRoleCheck());

function IsInRole(role: string): boolean {
	return currentUser.roles.some(r => r.role === role);
}

class DecoratedExampleMethodDecoration implements IDecoratorExample {
	@Role("user")
	AnyoneCanRun(args: string): void {
		console.log(args);
	}

	@Role("admin")
	AdminOny(args: string): void {
		console.log(args);
	}
}

function Role(role: string) {
	return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
		let originalMethod = descriptor.value;
		descriptor.value = function () {
			if (IsInRole(role)) {
				originalMethod.apply(this, arguments);
				return;
			}

			console.log(`${currentUser.user} is not in the ${role} role`);
		};

		return descriptor;
	}
}
